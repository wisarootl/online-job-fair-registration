const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters']
    },
    address: {
      type: String,
      require: [true, 'Please add an address']
    },
    district: {
      type: String,
      require: [true, 'Please add a district']
    },
    province: {
      type: String,
      require: [true, 'Please add a province']
    },
    postalcode: {
      type: String,
      require: [true, 'Please add a postalcode'],
      maxlength: [5, 'Postal Code cannot be more than 5 digits']
    },
    tel: {
      type: String
    },
    region: {
      type: String,
      require: [true, 'Please add a region']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

// Cascade delete Bookings when a Company is deleted
CompanySchema.pre('remove', async function (next) {
  console.log(`Bookings being removed from Company ${this._id}`)
  await this.model('Booking').deleteMany({ Company: this._id })
  next()
})
// Reverse populate with virtuals
CompanySchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'Company',
  justOne: false
})

module.exports = mongoose.model('Company', CompanySchema)
