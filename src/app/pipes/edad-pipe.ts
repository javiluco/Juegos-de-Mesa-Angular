import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
})
export class EdadPipe implements PipeTransform {
  transform(fechaNacimiento: string): number {
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
    const yaCumplio =
      (hoy.getMonth() + 1 > mes) ||
      (hoy.getMonth() + 1 === mes && hoy.getDate() >= dia);
    if (!yaCumplio) edad--;
    return edad;
  }
}