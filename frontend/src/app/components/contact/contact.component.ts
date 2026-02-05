import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private http = inject(HttpClient);
  
  // IMPORTANTE: Obtenha sua Access Key em https://web3forms.com
  // É gratuito e leva apenas 1 minuto!
  private readonly accessKey = '5935702f-9d36-4432-b9af-06ad95ed641f'; // ⚠️ Substitua pela sua chave do Web3Forms
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'rhayssakramer@gmail.com',
      link: 'mailto:rhayssakramer@gmail.com',
      isExternal: false,
      delay: '0.1s',
      svgPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    },
    {
      icon: 'location',
      title: 'Localização',
      value: 'Olinda, Brasil',
      link: '',
      isExternal: false,
      delay: '0.2s',
      svgPath: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'
    },
    {
      icon: 'github',
      title: 'GitHub',
      value: 'github.com/rhayssakramer',
      link: 'https://www.github.com/rhayssakramer',
      isExternal: true,
      delay: '0.3s',
      svgPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/rhayssakramer',
      link: 'https://linkedin.com/in/rhayssakramer',
      isExternal: true,
      delay: '0.4s',
      svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      icon: 'socials',
      title: 'Redes Sociais',
      value: 'linktr.ee/devrhakramer',
      link: 'https://linktr.ee/devrhakramer',
      isExternal: true,
      delay: '0.5s',
      svgPath: '',
      customIcon: 'assets/icons/logo.svg'
    }
  ];

  async onSubmit(event: Event) {
    event.preventDefault();
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';
    
    // Preparar dados para Web3Forms
    const formPayload = {
      access_key: this.accessKey,
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
      subject: `Nova mensagem de ${this.formData.name} - Portfolio`,
      from_name: 'Portfolio Contact Form',
      to_email: 'rhayssakramer@gmail.com' // Seu email
    };
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.submitStatus = 'success';
        
        // Limpar formulário após sucesso
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
        
        // Resetar status após 5 segundos
        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      } else {
        throw new Error(data.message || 'Erro ao enviar mensagem');
      }
    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      this.submitStatus = 'error';
      this.errorMessage = 'Erro ao enviar mensagem. Tente novamente ou envie um email diretamente para rhayssakramer@gmail.com';
      
      // Resetar status de erro após 5 segundos
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
