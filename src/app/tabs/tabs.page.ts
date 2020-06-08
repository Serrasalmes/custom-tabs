import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

//modals
import { QrscanPage } from '../qrscan/qrscan.page';

//popover
import { TransaksiComponent } from '../transaksi/transaksi.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController
  ) {

  }
  
  async presentModal () {
    const modal = await this.modalController.create({
      component: QrscanPage
    });
    return await modal.present();
  } 

  async popover(ev: any) {
    const popover = await this.popoverController.create({
        component: TransaksiComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    popover.style.cssText = '--min-width: 180px; --max-width: 200px; margin-top:-30px;';
    return await popover.present();
}

}
