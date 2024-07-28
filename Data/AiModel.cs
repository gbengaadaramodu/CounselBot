using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CounselBot.Data
{
    public  class AiModel
    {
        public List<Content> contents { get; set; }
    }
    //public class Content
    //{
    //    public List<Part> parts { get; set; }
    //}

    public class Part
    {
        public string text { get; set; }
    }



    //AI generated response

    public class AiResponse
    {
        public List<Candidate> candidates { get; set; }
        public UsageMetadata usageMetadata { get; set; }
    }
    public class Candidate
    {
        public Content content { get; set; }
        public string finishReason { get; set; }
        public int index { get; set; }
        public List<SafetyRating> safetyRatings { get; set; }
    }

    public class Content
    {
        public List<Part> parts { get; set; }
        public string role { get; set; }
    }


    public class SafetyRating
    {
        public string category { get; set; }
        public string probability { get; set; }
    }

    public class UsageMetadata
    {
        public int promptTokenCount { get; set; }
        public int candidatesTokenCount { get; set; }
        public int totalTokenCount { get; set; }
    }





}
