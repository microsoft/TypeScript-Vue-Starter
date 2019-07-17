import Hello from '@/components/Hello.vue';
import { mount } from '@vue/test-utils';

describe('Hello.vue', () => {
  it('should render', () => {
    const name = 'World';
    const initialEnthusiasm = 5;

    const wrapper = mount(Hello, {
      propsData: {
        name, initialEnthusiasm
      }
    })
    expect(wrapper.find('.greeting').text()).toBe('Hello World!!!!!')
  })
});