module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5563d6f115441d9a2a2f42609d075f65'),
  },
});
