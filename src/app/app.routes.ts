import { Routes } from '@angular/router';
import { ShardSquadPage } from './pages/shard-squad-page/shard-squad-page.component';
import { MainContent } from './main-content/main-content.component';

export const routes: Routes = [
    {
        path: '',
        component: MainContent
    },
    {
        path: 'shard-squad',
        component: ShardSquadPage
    }
];
