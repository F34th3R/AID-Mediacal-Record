import React from 'react'
import TextField from '@material-ui/core/es/TextField'
import { StyledCard } from '../styles/StyledCard'
import { StyledH2 } from '../styles/StyledH2'

export const FormExploracion = ({ close }) => {
  return (
    <>
      <StyledCard style={{ marginTop: '0px', position: 'relative' }}>
        {close}
        <StyledH2>Exploración Oftalmológica</StyledH2>
        <p>Ojo Derecho</p>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Exploración externa"
          autoFocus
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Cornea y cámara anterior "
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Conjuntiva "
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Iris y pupila"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Cristalino"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Presión intraocular"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Fondo de Ojo"
          onChange={e => {}}
          value={''}
          required
        />
        <div style={{ marginTop: '20px' }} />
        <p>Ojo Izquierdo</p>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Exploración externa"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Cornea y cámara anterior "
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Conjuntiva "
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Iris y pupila"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Cristalino"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Presión intraocular"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Fondo de Ojo"
          onChange={e => {}}
          value={''}
          required
        />
      </StyledCard>
    </>
  )
}
