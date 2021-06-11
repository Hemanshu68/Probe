import React from "react";
import { Editor, IAllProps } from "@tinymce/tinymce-react";
import Axios from "axios";

import { Editor as TinyMCEEditor } from "tinymce";
import { useField } from "formik";

interface EditorFieldProps extends IAllProps {
    name: string;
}

const cloudName = "alphatest68";
const Cloudinary_URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

const upload_preset = "cdtvqkhy";

const RichEditor = ({ name, ...otherProps }: EditorFieldProps) => {
    const [field, meta] = useField(name);
    const type = "text";

    const handleEditorChange = (value: string, _editor: TinyMCEEditor) => {
        field.onChange({ target: { type, name, value } });
    };

    const handleBlur = (e: unknown, editor: TinyMCEEditor) => {
        field.onBlur({ target: { name } });
    };

    const getImageUrl = async (formData: FormData) => {
        const url = await Axios.post(`${Cloudinary_URL}`, formData)
            .then((res) => {
                return res.data.secure_url;
            })
            .catch(function (error) {
                console.log(error);
            });
        return url;
    };

    return (
        <div style={{ width: "90%", margin: "2rem auto" }}>
            <Editor
                {...otherProps}
                value={field.value}
                onEditorChange={handleEditorChange}
                onBlur={handleBlur}
                apiKey='qxq9swtd1hru6x2r5preaja3lbtyeetyvglwo2ytwkqj2ybt'
                initialValue=''
                init={{
                    branding: false,
                    statusbar: false,
                    plugins:
                        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",

                    menubar: "file edit view insert format tools table help",
                    toolbar:
                        "undo redo | bold italic underl(ine strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                    toolbar_sticky: true,
                    automatic_uploads: true,
                    images_upload_handler: async (
                        blobInfo,
                        success,
                        failure
                    ) => {
                        const formData = new FormData();
                        formData.append("file", blobInfo.blob());
                        formData.append("upload_preset", upload_preset);
                        const x = await getImageUrl(formData);
                        success(x);
                    },
                    autosave_ask_before_unload: true,
                    autosave_interval: "30s",
                    autosave_prefix: "{path}{query}-{id}-",
                    autosave_restore_when_empty: false,
                    autosave_retention: "2m",
                    image_advtab: true,
                    link_list: [],
                    image_list: [],
                    image_class_list: ["hello"],
                    importcss_append: true,
                    templates: [],
                    template_cdate_format:
                        "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
                    template_mdate_format:
                        "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
                    height: 600,
                    image_caption: true,
                    quickbars_selection_toolbar:
                        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                    noneditable_noneditable_class: "mceNonEditable",
                    toolbar_mode: "sliding",
                    contextmenu: "link image imagetools table",
                    skin: "bootstrap",
                    content_css: "default",
                    icons: "default",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default RichEditor;
