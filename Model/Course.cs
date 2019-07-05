using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AngularOverview.Model
{
    public class Course
    {
      [BsonId]
      [BsonRepresentation(BsonType.ObjectId)]
      public string Id { get; set; }

      public string Slug
      {
        get;
        set;
      }

      public string Title {get; set; }
      public string Author { get; set; }
    }
}
