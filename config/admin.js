module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f7a762431d6650bc22badc6638b67ab1'),
  },
});
