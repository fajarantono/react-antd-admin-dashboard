import type {MenuProps} from 'antd';
import {Dropdown} from 'antd';
import {TranslationOutlined} from '@ant-design/icons';

import type {LanguageType} from '@/locales';
import {useLanguage} from '@/hooks';

export default function LanguageMenu() {
  const {language, setLanguage} = useLanguage();

  const items: MenuProps['items'] = [
    {
      label: 'Indonesia',
      key: 'id-ID',
    },
    {
      label: 'English',
      key: 'en-US',
    },
  ];

  const onClick: MenuProps['onClick'] = ({key}) => {
    setLanguage(key as LanguageType);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick,
        selectable: true,
        defaultSelectedKeys: [language],
      }}
      arrow
      placement="bottom">
      <div role="menuitem" tabIndex={-1}>
        <TranslationOutlined style={{transform: 'scale(1.3)'}} />
      </div>
    </Dropdown>
  );
}
