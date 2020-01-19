import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/productos';
import { CartService } from './../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.page.html',
  styleUrls: ['./cartmodal.page.scss'],
})
export class CartmodalPage implements OnInit {

  cart: Productos[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Gracias por su orden!',
      message: 'Te lo llevamos lo mas pronto posible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }

}
