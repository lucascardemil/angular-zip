import { Component } from '@angular/core';
import * as JSZip from 'jszip';
import fileSaver from 'file-saver';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  createZip() {
    const zip = new JSZip.default();
    // create a file
    zip.file('Hello.txt', 'Hello World\n');
    // create a file and a folder
    // zip.file("nested/hello.txt", "Hello World\n");
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      // see FileSaver.js
      fileSaver.saveAs(content, 'example.zip');
    });
  }
}
