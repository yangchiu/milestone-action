# Get milestone javascript action

Get milestone object from milestone name

## Inputs

## `token`

**Required** Github token.

## `repository`

**Required** Github repository to be retrieved.

## `name`

Name of the milestone to be retrieved.

## Outputs

## `milestone`

The retrieved milestone object.

## Example usage

uses: yangchiu/milestone-action@v1
with:
  token: ${{ github.token }}
  repository: ${{github.repository }}