import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jhi-editor-widget',

  templateUrl: './editor-widget.component.html',
})
export class EditorWidgetComponent implements OnInit {
  @Input() content: any;

  @Input() config: any;

  @Output() DataChanged = new EventEmitter<any>();

  @Output() DataBlur = new EventEmitter<any>();

  @Output() Keyup = new EventEmitter<any>();

  editor: any;

  constructor() {
    this.config = {
      height: 250,

      theme: 'modern',

      plugins:
        'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',

      toolbar:
        'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',

      image_advtab: true,

      imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',

      templates: [
        { title: 'Test template 1', content: 'Test 1' },

        { title: 'Test template 2', content: 'Test 2' },
      ],

      content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css'],

      style_formats_merge: true,

      branding: false,

      setup: (editor: any) => this.setup(editor),
    };
  }

  ngOnInit() {
    if (!this.content) {
      this.content = 'test content';
    }
  }

  onReady() {
    console.log('editor ready!');
  }

  private setup(editor: { on: (arg0: string, arg1: { (): void; (): void; (): void }) => void; getContent: () => string }) {
    this.editor = editor;

    editor.on('blur', () => {
      this.content = editor.getContent();

      this.DataBlur.emit(this.content);
    });

    editor.on('keyup', () => {
      this.content = editor.getContent();

      this.Keyup.emit(this.content);
    });

    editor.on('change', () => {
      this.content = editor.getContent();

      this.DataChanged.emit(this.content);
    });
  }
}
