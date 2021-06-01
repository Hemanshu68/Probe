import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichEditor = () => {
    const changeVal = (e: any) => {
        console.log(e.target.value);
    };
    return (
        <div style={{ width: "90%", margin: "0 auto" }}>
            <Editor
                apiKey='qxq9swtd1hru6x2r5preaja3lbtyeetyvglwo2ytwkqj2ybt'
                initialValue=''
                onChange={(e) => changeVal(e)}
                init={{
                    plugins:
                        "print preview paste importcss tinydrive searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                    imagetools_cors_hosts: ["picsum.photos"],
                    menubar: "file edit view insert format tools table help",
                    toolbar:
                        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                    toolbar_sticky: true,
                    tinydrive_token_provider: () => {
                        return "cc07d83d201a71b889826efb427bd27480adc7f8e075dffa6647edb8c44ed1bb";
                    },
                    autosave_ask_before_unload: true,
                    autosave_interval: "30s",
                    autosave_prefix: "{path}{query}-{id}-",
                    autosave_restore_when_empty: false,
                    autosave_retention: "2m",
                    image_advtab: true,
                    link_list: [],
                    image_list: [],
                    image_class_list: [],
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
                    skin: "oxide-dark",
                    content_css: "dark",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
        </div>
    );
};

export default RichEditor;
