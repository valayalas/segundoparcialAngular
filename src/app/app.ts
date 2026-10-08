import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Navbar, RouterOutlet], // <-- Solo dejamos Navbar y RouterOutlet
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}