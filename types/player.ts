export default interface PlayerAPIResponse {
  CurrentlyPlaying: CurrentlyPlaying;
}

interface CurrentlyPlaying {
  ReleaseId: string;
  TrackId: string;
  UserId: string;
  PlayTime: string;
  CurrentPlayLocation: number;
  Duration: number;
  TrackTitle: string;
  TrackVersion: string;
  ReleaseTitle: string;
  ArtistsTitle: string;
  CatalogId: string;
}
