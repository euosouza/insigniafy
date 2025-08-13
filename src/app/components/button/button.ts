import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = 'Click Me';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Output() onClick = new EventEmitter<Event>();

  baseClass = `h-10px px-4 py-2 rounded text-base font-medium cursor-pointer
    flex items-center justify-center gap-2
    transition duration-300 ease-in-out
    disabled:bg-gray-300 disabled:cursor-not-allowed
  `;

  public get getClass(): string {
    switch (this.variant) {
      case 'primary':
        return twMerge(this.baseClass, "bg-primary-800 hover:bg-primary-950 text-white");
      case 'secondary':
        return twMerge(this.baseClass, "bg-secondary-200 hover:bg-secondary-300 text-black");
      default:
        return twMerge(this.baseClass, "bg-gray-400 hover:bg-gray-500 text-white");;
    }
  }

  public handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
