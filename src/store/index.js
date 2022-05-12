import { createStore } from 'vuex';
import { sample } from '@/store/modules/sample';
import { Calculator } from '@/store/modules/Calculator';
import { List } from '@/store/modules/List';
export default createStore({
	modules: { sample, Calculator, List },
});
