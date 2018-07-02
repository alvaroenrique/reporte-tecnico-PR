import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatCardModule]
})

export class MaterialModule {}
