import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SetupComponent } from './setup/setup.component';
import { ProductComponent } from './product/product.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { FaqComponent } from './faq/faq.component';

export const Approute:Routes = [
    {
        path : '',
        component : DashboardComponent
    },
        {
        path : 'user',
        component : UserComponent
    },
        {
        path : 'setup',
        component : SetupComponent
    },
    {
        path : 'product',
        component : ProductComponent
    },
        {
        path : 'manufacturer',
        component : ManufacturerComponent
    },
        {
        path : 'faq',
        component : FaqComponent
    }
 ];