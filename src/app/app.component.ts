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
    zip.folder('photos');
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      // see FileSaver.js
      fileSaver.saveAs(content, 'example.zip');
    });
  }
}
