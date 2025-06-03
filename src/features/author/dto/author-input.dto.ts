import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class AuthorInputDto {
  @MaxLength(100, { message: "Author's full name should contain 100 characters only" })
  @IsNotEmpty({
    message: "Author's fullname is required",
  })
  fullName: string;

  @MaxLength(100, { message: "Author's url slug should contain 100 characters only" })
  @IsNotEmpty({
    message: "Author's url slug is required",
  })
  urlSlug: string;
  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    },
  )
  email: string;
  note: string;
}
