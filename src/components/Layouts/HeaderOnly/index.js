import Header from '~/components/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
