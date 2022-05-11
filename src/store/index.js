import { createStore } from 'vuex';
import { sample } from '@/store/modules/sample';
import { Calculator } from '@/store/modules/Calculator';
export default createStore({
	modules: { sample, Calculator },
});
