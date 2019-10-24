import React from 'react'
import ConstituencyTableContent from 'components/molecules/constituency/ConstituencyTableContent'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import TableCell from '@material-ui/core/TableCell'
import { Typography } from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow'

const DistrictNameTableRow = styled(TableRow)`
  && {
    cursor: pointer;
  }
`

const DistrictTableContent = props => {
  const { district, year } = props
  return (
    <>
      <DistrictNameTableRow
        onClick={() => {
          props.history.push(`/district/${year}/${district.dc_code}`)
        }}
      >
        <TableCell colSpan={5}>
          <Typography variant="h4">{district.dc_name_zh}</Typography>
          <Typography variant="body2" gutterBottom>
            {district.constituencies.length}個選區
          </Typography>
          {district.dc_description_zh && (
            <Typography variant="body1">
              {district.dc_description_zh}
            </Typography>
          )}
        </TableCell>
      </DistrictNameTableRow>
      {district.constituencies.map(constituency => {
        return (
          <ConstituencyTableContent
            key={constituency.id}
            constituency={constituency}
            year={year}
          />
        )
      })}
    </>
  )
}

export default withRouter(DistrictTableContent)