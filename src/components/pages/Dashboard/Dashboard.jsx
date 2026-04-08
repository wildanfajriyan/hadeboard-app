import { Box, Button } from '@mui/material';
import { useState } from 'react';

import Modal from '../../ui/Modal';

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <Box>
      <Button type="button" variant="contained" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <Modal
        open={isOpenModal}
        handleClose={handleCloseModal}
        title={'Test Modal'}
      >
        <Box
          sx={{
            padding: 2,
            width: 500,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          dolores labore commodi nisi corrupti amet debitis impedit consequuntur
          velit atque ratione est dolorum ipsum non ullam officiis, optio
          laudantium consequatur!
        </Box>
      </Modal>
    </Box>
  );
};

export default Dashboard;
