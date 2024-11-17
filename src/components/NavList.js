import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive,EditOutlined as Edit, DeleteOutlineOutlined as Delete   } from '@mui/icons-material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const NavList = ({ setSelectedNote }) => {
  const menuItems = [
    { id: 1, name: 'Notes', icon: <Lightbulb /> },
    { id: 2, name: 'Remember', icon: <NotificationsNoneOutlinedIcon /> },
    { id: 3, name: 'Edit', icon: <Edit /> },
    { id: 4, name: 'Archive', icon: <Archive /> },
    { id: 5, name: 'Trash', icon: <Delete /> },
    
];


  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.id} onClick={() => {
          if (item.id === 'Notes') {
            setSelectedNote(null);
          }
        }}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
