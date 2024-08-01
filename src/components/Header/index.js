import styles from './Header.module.scss';
import SocialShareBlock from '../SocialShareBlock';
import BottomNav from './BottomNav';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navTop}>
        <SocialShareBlock />
      </nav>
      <BottomNav />
    </header>
  );
}

export default Header;
