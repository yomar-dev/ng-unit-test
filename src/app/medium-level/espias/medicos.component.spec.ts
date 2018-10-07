import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe cargar los medicos', () => {
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([['Medico1', 'Medico2', 'Medico3', 'Medico4']]);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar el servidor para agregar un médico', () => {
        const spy = spyOn(servicio, 'agregarMedico').and.callFake(() => {
            return empty();
        });

        componente.agregarMedico();
        expect(spy).toHaveBeenCalled();
    });
});
