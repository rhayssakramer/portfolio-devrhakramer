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
  private accessKey = '5935702f-9d36-4432-b9af-06ad95ed641f'; // ⚠️ Substitua pela sua chave do Web3Forms
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  async onSubmit(event: Event) {
    event.preventDefault();
    
    if (this.accessKey === 'SUA_ACCESS_KEY_AQUI') {
      alert('⚠️ Configure sua Access Key do Web3Forms!\n\n1. Acesse: https://web3forms.com\n2. Crie uma conta gratuita\n3. Copie sua Access Key\n4. Cole no arquivo contact.component.ts');
      return;
    }
    
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
