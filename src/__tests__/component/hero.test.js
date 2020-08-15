import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Hero from '../../component/hero/hero.js';

describe('<Hero />', ()=> {
    it('is alive at application start', () =>{
        let app = shallow(<Hero />);
        expect(app.find('Nav').exists()).toBeTruthy();
    });

    it('changes state on click', ()=> {
        let app = mount(<Hero />);
        let button = app.find('input');
        button.simulate('click');
        expect(app.state('color')).toBeTruthy();
    });

    it('renders correctly', ()=> {
        const tree = renderer.create(<Hero />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});