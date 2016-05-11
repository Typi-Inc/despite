import { Subject } from 'rxjs'

const registration = {
  verifyPhoneNumber$: new Subject,
  verifyCode$: new Subject,
  assignToRegisteringUser$: new Subject
}

export default registration
