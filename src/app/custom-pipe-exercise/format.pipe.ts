import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(
    val: number | undefined,
    type: 'MB' | 'Bytes'
  ): string {
    if (!val) return '0'

    switch (type) {
      case 'MB':
        return `${val * 1000000} Bytes`
      case 'Bytes':
        return `${val / 1000000} MB`
    }
  }

}
