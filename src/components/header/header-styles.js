export default theme => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  banner: {
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
})
