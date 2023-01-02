import PropTypes from 'prop-types';
// @mui
import { Box, Chip, Avatar, Checkbox, AvatarGroup, FormControlLabel } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

// BlogPostTags.propTypes = {
//   post: PropTypes.object.isRequired,
// };

export default function BlogPostTags({ post }) {
  // const { favorite, tags, favoritePerson } = post;

  return (
    <Box sx={{ py: 3 }}>
      <Chip label="tag" sx={{ m: 0.5 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              color="error"
              icon={<Iconify icon="eva:heart-fill" />}
              checkedIcon={<Iconify icon="eva:heart-fill" />}
            />
          }
          label="tags"
        />
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': { width: 32, height: 32 },
          }}
        >
          <Avatar />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
