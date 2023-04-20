import { createStore } from 'vuex';
import ModuleAstres from './ModuleAstres';
import ModuleImageJour from './ModuleImageJour';
import ModuleFavoris from './ModuleFavoris';


export default createStore({
  modules: {
    astres: ModuleAstres,
    imagedujour:  ModuleImageJour,
    favoris: ModuleFavoris,
  },
});
