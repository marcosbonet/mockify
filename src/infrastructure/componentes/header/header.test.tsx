import { render, screen } from '@testing-library/react';

describe('When using the header" component', () => {
    describe('When we render the component', () => {
        test('Then should render the h1 "test"', () => {
            render(
                <header>
                    <h1>test</h1>
                </header>
            );
            expect(screen.getByText('test')).toBeInTheDocument();
        });
    });
});
