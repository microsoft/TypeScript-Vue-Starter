import Hello from '@/components/Hello.vue';
import { shallow, Wrapper } from '@vue/test-utils';
import { expect } from 'chai';
import Vue from 'vue';

describe('Hello.vue', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallow(Hello, {propsData: {name: 'VueJs TypeScript', initialEnthusiasm: 2}});
  });

  it('should display greeting', () => {
    expect(wrapper.find('.greeting').text()).to.contain('VueJs TypeScript');
  });

  it('should have 2 bangs', () => {
    expect(wrapper.find('.greeting').text()).to.contain('!!');
  });

  it('should allow increasing bangs', () => {
    (wrapper.vm as any).increment();
    expect(wrapper.find('.greeting').text()).to.contain('!!!');
  });

  it('should allow decreasing bangs', () => {
    (wrapper.vm as any).decrement();
    expect(wrapper.find('.greeting').text()).not.to.contain('!!!');
  });
});
