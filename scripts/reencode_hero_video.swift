import AVFoundation
import Foundation

guard CommandLine.arguments.count == 3 else {
  fputs("usage: reencode_hero_video.swift <input> <output>\n", stderr)
  exit(2)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])

let asset = AVURLAsset(url: inputURL)

guard let exportSession = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetHighestQuality) else {
  fputs("failed to create export session\n", stderr)
  exit(1)
}

try? FileManager.default.removeItem(at: outputURL)

exportSession.outputURL = outputURL
exportSession.outputFileType = .mp4
exportSession.shouldOptimizeForNetworkUse = true
exportSession.metadata = []

let semaphore = DispatchSemaphore(value: 0)

exportSession.exportAsynchronously {
  semaphore.signal()
}

_ = semaphore.wait(timeout: .distantFuture)

switch exportSession.status {
case .completed:
  print("completed")
case .failed:
  fputs("export failed: \(exportSession.error?.localizedDescription ?? "unknown error")\n", stderr)
  exit(1)
case .cancelled:
  fputs("export cancelled\n", stderr)
  exit(1)
default:
  fputs("export ended in unexpected state: \(exportSession.status.rawValue)\n", stderr)
  exit(1)
}
