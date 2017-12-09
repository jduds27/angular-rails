import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'

})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "My description",
      file_url: "http://google.com",
      updated_at: '05/25/17',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: "My description",
      file_url: "http://google.com",
      updated_at: '05/25/17',
      image_url: 'https://cdn.pixabay.com/photo/2017/03/30/14/35/startup-2188681_960_720.jpg',
    },
    {
      title: "My Third Doc",
      description: "My description",
      file_url: "http://google.com",
      updated_at: '05/25/17',
      image_url: 'https://cdn.pixabay.com/photo/2016/03/09/14/40/office-1246484_960_720.jpg',
    }
  ]
}