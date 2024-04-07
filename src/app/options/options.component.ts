import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

  constructor(private router:Router){}

  options = [
    { 
      img: 'https://cdn.dribbble.com/users/255/screenshots/7801277/media/904ae0e3f3995c9ce33758dd06928406.png', 
      titleParts: ["I'm a designer looking to", "share my work"]
    },
    {
      img: 'https://cdn.dribbble.com/users/255/screenshots/7861779/media/5a6246e56604072b551ac01ad2ae675f.png', 
      titleParts: ["I'm looking to hire a", "designer"]
    },
    {
      img: 'https://cdn.dribbble.com/users/255/screenshots/7887117/media/c94f2a58d7da974404a5122872bb93b0.png', 
      titleParts: ["I'm looking for design", "inspiration"]
    }
  
  ];


  selectedIndices: number[] = [];

  isSelected(index: number): boolean {
    return this.selectedIndices.includes(index);
  }

  toggleSelection(index: number): void {
    if (this.isSelected(index)) {
      // If already selected, remove from selectedIndices
      this.selectedIndices = this.selectedIndices.filter(i => i !== index);
    } else {
      // If not selected, add to selectedIndices
      this.selectedIndices.push(index);
      console.log(this.selectedIndices);
      
    }
  }

  redirectToProfile()
  {
      this.router.navigate(['/profile']);
  }

  redirectToEmail()
  {
    this.router.navigate(['/email']);
  }
}
