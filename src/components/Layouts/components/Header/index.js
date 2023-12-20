import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseLaptop, faInbox, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faCircleXmark, faMessage } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <a href="#" className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok logo" />
                </a>

                <form action="" method="GET" className={cx('searchForm')}>
                    <input type="text" name="searchValue" placeholder="Tìm kiếm" />
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button> */}
                    <span className={cx('span-line')}></span>

                    <button type="submit" className={cx('submitSearchBtn')}>
                        <FontAwesomeIcon className={cx('searchIcon')} icon={faMagnifyingGlass} />
                    </button>
                    <div className={cx('inputBorder')}></div>
                </form>

                <div className="right-menu-bar">
                    <a href="#a" className="buttonUpload">
                        <FontAwesomeIcon icon={faPlus} color="#fff" />
                        <span>Tải lên</span>
                    </a>
                    <a href="#a" className="buttonIcon">
                        <FontAwesomeIcon color="#fff" icon={faHouseLaptop} />
                    </a>
                    <a href="#a" className="buttonIcon">
                        <FontAwesomeIcon color="#fff" icon={faMessage} />
                    </a>
                    <a href="#a" className="buttonIcon">
                        <FontAwesomeIcon color="#fff" icon={faInbox} />
                    </a>
                    <a href="#a" className="buttonIcon">
                        <FontAwesomeIcon color="#fff" icon={faCircleUser} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
