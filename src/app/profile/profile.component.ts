import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  selectedImage: string | undefined;
  location: string = '';

  constructor(private router:Router) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.toggleButton();
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedImage = undefined;
      this.toggleButton();
    }
  }

  toggleButton() {
    const button = document.getElementById('submitButton') as HTMLButtonElement;
    if (button) {
      button.disabled = !this.selectedImage || !this.location.trim();
    }
  }

  redirectToOptions()
  {
    this.router.navigate(['/options']);
  }
}
