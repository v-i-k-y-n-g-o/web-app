import { EntityActionsModule } from './entity-actions.module';

describe('EntityActionsModule', () => {
    let entityActionsModule: EntityActionsModule;

    beforeEach(() => {
        entityActionsModule = new EntityActionsModule();
    });

    it('should create an instance', () => {
        expect(entityActionsModule).toBeTruthy();
    });
});
