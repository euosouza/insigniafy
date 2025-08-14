import { Component, OnInit } from '@angular/core';
import { Button } from '../../components/shared/button/button';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, UntypedFormArray, UntypedFormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerar-certificado',
  imports: [Button,ReactiveFormsModule, CommonModule],
  templateUrl: './gerar-certificado.html',
  styleUrl: './gerar-certificado.css'
})
export class GerarCertificado implements OnInit {
  form!: FormGroup;

  dataSourceAtividades: Array<string> = [];
  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.buildForm();
  }
  ngOnInit(): void {
    console.log("ngOnInit GerarCertificado");
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      atividade: [''],
      atividades: this.formBuilder.array([], Validators.required)
    });
  }

  public addAtividade() {
    const controlAtividade = this.form.get('atividade') as UntypedFormControl;
    const controlAtividades = this.form.get('atividades') as UntypedFormArray;

    this.dataSourceAtividades.push(controlAtividade.value ?? "");
    controlAtividades.push(new FormControl(controlAtividade.value ?? ""));

    controlAtividade?.setValue('');
  }

  public removeAtividade(index: number) {
    const controlAtividades = this.form.get('atividades') as UntypedFormArray;

    this.dataSourceAtividades.splice(index, 1);
    controlAtividades?.removeAt(index);
  }

  gerarCertificado() {
    this.router.navigate(['/certificados', 1]);
  }

  hasError(nameControl: string): boolean | undefined {
    return this.form.get(nameControl)?.invalid && (this.form.get(nameControl)?.touched);
  }

  hasErrorAtividades(): boolean | undefined {
    const controlAtividades = this.form.get('atividades') as UntypedFormArray;
    return controlAtividades.value.length === 0;
  }
}
