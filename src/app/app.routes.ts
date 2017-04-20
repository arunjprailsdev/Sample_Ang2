import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SetupComponent } from './setup/setup.component';
import { ProductComponent } from './product/product.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { FaqComponent } from './faq/faq.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { PostComponent } from './post/post.component';
import { RemapComponent } from './remap/remap.component';
import { NrComponent } from './nr/nr.component';
import { RdrComponent } from './rdr/rdr.component';
import { ApiComponent } from './api/api.component';
export const Approute:Routes = [
    {
        path : '',
        component : DashboardComponent
    },
        {
        path : 'user',
        component: UserComponent,
        children: [
            {
            path:'',
            component : RemapComponent
        },
        {
        path: 'remap',
        component: RemapComponent
        },
        {
        path: 'rdr',
        component: RdrComponent
        },
        {
        path: 'nr',
        component: NrComponent
        }
        ]
        
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
    ,
        {
        path : 'testservice',
        component : TestServiceComponent
    }
       ,
        {
        path : 'httpservice',
        component : HttpServiceComponent
    },
        {
        path : 'posts',
        component : PostComponent
    },
    {
        path : 'api',
        component : ApiComponent
    }
 ];