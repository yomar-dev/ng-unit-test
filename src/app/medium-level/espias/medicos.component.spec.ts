import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';


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

    it('Debe agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { id: 1, nombre: 'Sergio' };
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mensajeError debe ser igual al error del servidor', () => {
        const miError = 'No se pudo agregar el médico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });
});
