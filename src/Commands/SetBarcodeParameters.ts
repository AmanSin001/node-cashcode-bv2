/**
 * SetBarcodeParameters.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Command } from '../Command';

/**
 * Class SetBarcodeParameters
 * 
 * Command for settings the barcode format and number of characters.
 * 
 * @description CCNet Document 1
 * @version 1.0.0
 */
export class SetBarcodeParameters extends Command {
  
  /**
   * SetBarcodeParameters constructor.
   */
  public constructor () {
    super(0x39);
  }

}

/* End of file SetBarcodeParameters.ts */