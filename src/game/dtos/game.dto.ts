export class CreateGameDto {
  name: string;
  role: string;
}

export class PlayGameDto {
  level: number;
}

export class GetAllGameDto {
  membership: string;
}
